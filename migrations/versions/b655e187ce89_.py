"""empty message

Revision ID: b655e187ce89
Revises: 4a642a9b2f13
Create Date: 2024-08-25 11:25:50.578139

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b655e187ce89'
down_revision = '4a642a9b2f13'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.String(length=32), nullable=False),
    sa.Column('email', sa.String(length=345), nullable=True),
    sa.Column('password', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
